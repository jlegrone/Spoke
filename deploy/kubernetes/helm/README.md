## Deploying

Provision a secret containing your API tokens:

```cli
export SPOKE_CONFIG_SECRET=spoke-prod-api-tokens
kubectl create secret generic $SPOKE_CONFIG_SECRET --from-env-file=../../../secret.env --output yaml --dry-run | kubectl apply -f -
```

Install Spoke:
```cli
helm upgrade --install spoke-prod . --set env.existingSecretName=$SPOKE_CONFIG_SECRET
```
