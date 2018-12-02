class Expense < ApplicationRecord
  CURRENCIES = %w[CAD].freeze
  KINDS = %w[payment expense]
  PAYMENT_KINDS = %w[paid deposited withdrew]

  belongs_to :creator, class_name: "User"
  belongs_to :payer, class_name: "User"
  has_many :debts

  after_save :update_total_balances

  def payment?
    kind == "payment"
  end

  def to_s
    if payment?
      [payer, payment_kind, "$#{format("%.2f", amount)}", "to", debts.first.user].join(" ")
    else
      description.capitalize
    end
  end

  def paid_by(user_id)
    user_id == payer_id ? amount : 0.0
  end

  def owed_by(user_id)
    debtor_ids.include?(user_id) ? amount / debtor_ids.length : 0.0
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

  def people_involved
    User.where(id: [payer_id, *debtor_ids])
  end

  private

  def update_total_balances
    payer.update(total_balance: payer.total_balance - amount)
    debts.each do |debt|
      fship = payer.friendship_with(debt.user_id)
      fship.balance(fship.primary == payer, debt.amount)

      debt.user.update(total_balance: debt.user.total_balance + debt.amount)
    end
  end
end
