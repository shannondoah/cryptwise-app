Rails.application.config.ethereum_client = Ethereum::HttpClient.new('http://localhost:8545')
Rails.application.config.registry_contract = Ethereum::Contract.create(
  name: "CryptwiseRegistry",
  truffle: { paths: [ '/Users/shannon/Sites/splitwisr' ] },
  client: Rails.application.config.ethereum_client
)
Rails.application.config.cryptwise_contract = Ethereum::Contract.create(
  name: "Cryptwise",
  truffle: { paths: [ '/Users/shannon/Sites/splitwisr' ] },
  client: Rails.application.config.ethereum_client,
  address: "0x#{Rails.application.config.registry_contract.call.registered_contract}"
)
