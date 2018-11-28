class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.belongs_to :primary, references: :user
      t.belongs_to :secondary, references: :user
      t.timestamps
    end
  end
end
