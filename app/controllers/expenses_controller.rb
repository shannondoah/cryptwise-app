# frozen_string_literal: true

class ExpensesController< ApplicationController
  before_action :authenticate_user!

  def new
    @expense = current_user.expenses.build
  end

  def create
    @expense = current_user.entered_expenses.create(expense_params)
    redirect_back fallback_location: dashboard_path, flash: {success: "Added a new bill"}
  end

  private

  def expense_params
    params.require(:expense).permit(:amount, :currency, :description, :payer_id, :category, :split_evenly, debtor_ids: [])
  end
end
