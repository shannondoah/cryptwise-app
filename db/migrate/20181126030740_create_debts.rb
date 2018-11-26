class CreateDebts < ActiveRecord::Migration[5.2]
  def change
    create_table :debts do |t|
      t.belongs_to :payment
      t.belongs_to :user
      t.float :amount
      t.timestamps
    end
  end
end
