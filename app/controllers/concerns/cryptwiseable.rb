module Cryptwiseable

  def client
    @client ||= Ethereum::HttpClient.new('http://localhost:9545')
  end

  def registry
    @registry ||= Ethereum::Contract.create(
      name: "CryptwiseRegistry",
      truffle: { paths: [ '/Users/shannon/Sites/splitwisr' ] },
      client: client
    )
  end

  def set_cryptwise
    @cryptwise ||= Ethereum::Contract.create(
      name: "Cryptwise",
      truffle: { paths: [ '/Users/shannon/Sites/splitwisr' ] },
      client: client,
      address: registry.call.registered_contract
    )
  end
end
