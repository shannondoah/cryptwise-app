class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :entered_payments, class_name: "Payment", foreign_key: :creator_id
  has_many :payments, class_name: "Payment", foreign_key: :payer_id
  has_many :debts
end
