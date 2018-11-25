class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.belongs_to :payer, references: :user, null: false
      t.float :amount, null: false, default: 0.0
      t.string :currency, default: "CAD", null: false
      t.string :description
      t.string :category
      t.timestamps
    end
  end
end
