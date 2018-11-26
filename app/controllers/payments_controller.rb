# frozen_string_literal: true

class PaymentsController< ApplicationController
  def index
  end

  def new
    @bill = Payment.new()
    respond_to do |format|
      format.html
      format.js
    end
  end

  def create
    @payment = Payment.create(payment_params)
    redirect_back fallback_location: payments_path, flash: {success: "Added a new bill"}
  end

  private

  def payment_params
    params.require(:payment).permit(:amount, :currency, :description, :payer_id)
  end
end
