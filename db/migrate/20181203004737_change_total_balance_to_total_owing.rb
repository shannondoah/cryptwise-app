class ChangeTotalBalanceToTotalOwing < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :total_balance, :total_owing
  end
end
