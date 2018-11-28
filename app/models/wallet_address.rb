class WalletAddress < ApplicationRecord
  belongs_to :user

  validates :address, uniqueness: true

  scope :default, -> { where(is_default: true) }

  before_save do
    if user.wallet_addresses.default.none?
      self.is_default = true
    end
  end
end
