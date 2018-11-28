class AddKindToExpenses < ActiveRecord::Migration[5.2]
  def change
    add_column :expenses, :kind, :string, default: "expense"
    add_column :expenses, :payment_kind, :string, default: "sent"
  end
end
