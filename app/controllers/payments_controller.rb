# frozen_string_literal: true

class PaymentsController< ApplicationController
  def index
  end

  def new
    respond_to do |format|
      format.html
      format.js
    end
  end

  def create
  end

  private

  def payment_params
    params.require(:payment).permit!
  end
end
