class RenamePaymentIdOnDebts < ActiveRecord::Migration[5.2]
  def change
    rename_column :debts, :payment_id, :expense_id
  end
end
