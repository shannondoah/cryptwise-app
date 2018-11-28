class RenamePaymentsTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :payments, :expenses
  end
end
