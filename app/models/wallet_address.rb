class WalletAddress < ApplicationRecord
  belongs_to :user

  validates :address, uniqueness: true

  scope :default, -> { where(is_default: true) }

  before_save do
    if user.wallet_addresses.default.none?
      self.is_default = true
    end
  end

  after_save do
    if is_default && previous_changes.keys.include?("is_default")
      user.wallet_addresses.where.not(id: id).update_all(is_default: false)
    end
  end
end
