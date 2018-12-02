# frozen_string_literal: true

class DashboardController< ApplicationController
  before_action :authenticate_user!, :set_content, :set_variables_for_content

  def show
  end

  private

  def set_content
    params[:display] ||= "expenses"
    @content = params[:display]
  end

  def set_variables_for_content
    case @content
    when "expenses"
      @expenses = current_user.involved_expenses
    when "balances"
      return unless current_user.default_address.present?

      value_in_wei = Rails.application.config.cryptwise_contract.call.payments_for(current_user.default_address.address)
      @balance_in_eth = CurrencyConverter.eth_from_wei(value_in_wei)
      @balance_in_cad = CurrencyConverter.to_cad(@balance_in_eth)
    end
  end
end
