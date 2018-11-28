class Expense < ApplicationRecord
  CURRENCIES = %w[CAD].freeze
  KINDS = %w[payment expense]
  PAYMENT_KINDS = %w[sent deposited withdrew]

  belongs_to :creator, class_name: "User"
  belongs_to :payer, class_name: "User"
  has_many :debts

  after_save :update_total_balances

  def payment?
    kind == "payment"
  end

  def to_s
    if payment?
      [payer, payment_kind, "$", amount, "to", debts.first.user, "."].join(" ")
    else
      description
    end
  end

  def debtor_ids
    debts.pluck(:user_id)
  end

  def debtor_ids=(str)
    ids = str.split(",")
    ids.each do |uid|
      debt = debts.find_or_initialize_by(user_id: uid)
      debt.amount = amount / ids.length
    end
  end

  private

  def update_total_balances
    payer.update(total_balance: payer.total_balance - amount)
    debts.each do |debt|
      debt.user.update(total_balance: debt.user.total_balance + debt.amount)
    end
  end
end
