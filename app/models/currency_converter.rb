class CurrencyConverter
  CONVERSION_RATE = 0.0065

  def self.to_eth(value)
    value * CONVERSION_RATE
  end

  def self.to_cad(value)
    value / CONVERSION_RATE
  end

  def self.eth_to_wei(value)
    value / 0.000000000000000001
  end

  def self.eth_from_wei(value)
    value * 0.000000000000000001
  end
end
