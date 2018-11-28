class CreateWalletAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :wallet_addresses do |t|
      t.belongs_to :user, null: false
      t.string :address, null: false, unique: true
      t.boolean :is_default, default: false
      t.timestamps
    end
  end
end
