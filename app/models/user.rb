class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :entered_expenses, class_name: "Payment", foreign_key: :creator_id
  has_many :expenses, class_name: "Payment", foreign_key: :payer_id
  has_many :debts
  has_many :friendships_as_primary, class_name: "Friendship", foreign_key: "primary_id"
  has_many :friendships_as_secondary, class_name: "Friendship", foreign_key: "secondary_id"

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
end
