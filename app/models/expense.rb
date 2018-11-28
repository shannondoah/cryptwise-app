class Expense < ApplicationRecord
  CURRENCIES = %w[CAD].freeze

  belongs_to :creator, class_name: "User"
  belongs_to :payer, class_name: "User"
  has_many :debts

  def to_s
    description
  end

  def debtor_ids
    debts.pluck(:user_id)
  end

  def debtor_ids=(str)
    ids = str.split(",")
    ids.each { |uid| debts.find_or_initialize_by(user_id: uid) }
  end
end
