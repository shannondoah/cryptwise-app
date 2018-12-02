# frozen_string_literal: true

class PaymentsController< ApplicationController
  before_action :authenticate_user!
  before_action :set_payee, only: :new

  def new
    @payment = current_user.expenses.build(kind: "payment", creator: current_user)
  end

  def create
    @payment = current_user.expenses.build(kind: "payment", creator: current_user)
    @payment.update(payment_params)
    redirect_back fallback_location: dashboard_path(display: "balances"), flash: { success: "Payment recorded" }
  end

  private

  def payment_params
    params.require(:expense).permit(:payment_kind, :amount, :debtor_ids)
  end

  def set_payee
    @friendship = current_user.friendship_with(params[:user_id])
    @payee = @friendship.friend_to(current_user)
  end
end
