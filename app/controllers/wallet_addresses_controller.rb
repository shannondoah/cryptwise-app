# frozen_string_literal: true

class WalletAddressesController< ApplicationController
  before_action :authenticate_user!

  def new
    @wallet_address = current_user.wallet_addresses.build
  end

  def create
    current_user.wallet_addresses.create(address_params)
    redirect_back fallback_location: user_path(current_user), flash: {success: "Added a new address"}
  end

  private

  def address_params
    params.require(:wallet_address).permit(:address, :is_default)
  end
end
