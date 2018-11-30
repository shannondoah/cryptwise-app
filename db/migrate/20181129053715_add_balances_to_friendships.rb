class AddBalancesToFriendships < ActiveRecord::Migration[5.2]
  def change
    add_column :friendships, :primary_owes, :float, default: 0.0
    add_column :friendships, :secondary_owes, :float, default: 0.0
  end
end
