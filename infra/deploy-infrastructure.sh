echo "Validating cloudformation template..."
aws cloudformation validate-template --template-body file://./infra/infrastructure-template.yaml

echo "Deploying cloudformation template..."
aws cloudformation deploy --template-file ./infra/infrastructure-template.yaml --stack-name InfraStack

read -p "Completed. Press any key to exit"