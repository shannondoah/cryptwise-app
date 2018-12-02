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

      set_cryptwise
      @balance_to_withdraw = @cryptwise.call.payments_for(current_user.default_address.address)
    end
  end
end
