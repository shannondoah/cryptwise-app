module Cryptwiseable

  def client
    @client ||= Ethereum::HttpClient.new('http://localhost:8545')
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
      address: "0x#{registry.call.registered_contract}"
    )
  end
end
