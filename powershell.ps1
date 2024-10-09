# Import the Azure module
Import-Module Az

# Login to Azure
Connect-AzAccount

# Set variables
$resourceGroupName = "example-resources"
$storageAccountName = "examplestorageacct"
$location = "West Europe"
$sku = "Standard_LRS"

# Create resource group if it doesn't exist
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $sku `
                     -Kind StorageV2 `
                     -EnableHttpsTrafficOnly $true `
                     -MinimumTlsVersion "TLS1_2"

# Output the storage account ID
$storageAccount = Get-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName
$storageAccount.Id