class ChangePaymentKindDefault < ActiveRecord::Migration[5.2]
  def change
    change_column :expenses, :payment_kind, :string, default: "paid"
  end
end
