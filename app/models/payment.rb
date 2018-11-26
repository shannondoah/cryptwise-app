class Payment < ApplicationRecord
  CURRENCIES = %w[CAD].freeze

  belongs_to :payer, class_name: "User"

  def to_s
    description
  end
end
