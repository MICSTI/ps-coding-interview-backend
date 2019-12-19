#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

echo "--- :k8s: Defining namespace"
kubectl apply -f ops/kubernetes/namespace.yml

# create or update deployment
echo "--- :k8s: Deploying to cluster"
kubectl apply -f ops/kubernetes/app.yml

# Wait for successful deployment
echo "--- :hiptest: Waiting for deployment rollout"
if kubectl rollout status deployment $BUILDKITE_BRANCH_WITHOUT_TYPE --namespace="$PROJECT_NAME" ; then
    # setting metadata, used in following build steps
    echo "--- :buildkite: Setting build metadata"
    buildkite-agent meta-data set "deploy_url" "$DEPLOY_URL"              # to make the deployment URL available on the Buildkite build API

    # post back build info and URL to Buildkite, annotate build with DEPLOY_URL
    echo "--- :git: Updating build information in Bitbucket"
    BB_CREDENTIALS=$(curl --silent -k -L https://credentials.parkside.at/bitbucket/git)
    curl -X POST --silent -o /dev/null -u "$BB_CREDENTIALS" \
        https://api.bitbucket.org/2.0/repositories/parksideit/parkside-stack/commit/$BUILDKITE_COMMIT/statuses/build \
        -d state=SUCCESSFUL \
        -d key="Build-URL" \
        -d name="$DEPLOY_URL" \
        -d url="$DEPLOY_URL" \
        -d description="Build #${BUILDKITE_BUILD_NUMBER} successful: ${SHA}"
    buildkite-agent annotate "Build deployed to: $DEPLOY_URL" --context "k8s deployment" --style "success"
else
    buildkite-agent annotate "Deployment to: $DEPLOY_URL failed or exceeded rollout time" --context "url" --style "error"
    exit 1
fi
