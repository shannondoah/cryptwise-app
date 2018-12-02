class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :entered_expenses, class_name: "Expense", foreign_key: :creator_id
  has_many :expenses, class_name: "Expense", foreign_key: :payer_id
  has_many :debts
  has_many :friendships_as_primary, class_name: "Friendship", foreign_key: "primary_id", dependent: :destroy
  has_many :friendships_as_secondary, class_name: "Friendship", foreign_key: "secondary_id", dependent: :destroy
  has_many :wallet_addresses, dependent: :destroy

  has_many :owed_expenses, through: :debts, source: :expense

  has_one :default_address, -> { where(is_default: true) }, class_name: "WalletAddress"

  before_save do
    self.avatar_url ||= "https://testing-cdn.spark.re/uploads/material/upload/4ab581955f989e8f335f56fd34dd4a5c/Untitled_design__3_.png"
  end

  def name
    [first_name, last_name].join(" ")
  end

  def to_s
    name
  end

  def friendships
    Friendship.by_user(id)
  end

  def friendship_with(user)
    friendships.by_user(user.id).first
  end

  def friends
    secondary_ids = friendships_as_primary.pluck(:secondary_id)
    primary_ids = friendships_as_secondary.pluck(:primary_id)
    User.where(id: [secondary_ids, primary_ids].flatten)
  end

  def involved_expenses
    (expenses + owed_expenses).uniq
  end
end
