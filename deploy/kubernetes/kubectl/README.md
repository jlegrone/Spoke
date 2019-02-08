## Deploying

Provision a secret containing your API token and database connection variables:

```cli
kubectl create secret generic spoke --from-env-file=../../../secret.env --output yaml --dry-run | kubectl apply -f -
```

Install Spoke:
```cli
kubectl apply -f ./bundle.yaml
```
