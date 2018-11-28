# frozen_string_literal: true

class ExpensesController< ApplicationController
  before_action :authenticate_user!

  def new
    @expense = Expense.new()
    respond_to do |format|
      format.html
      format.js
    end
  end

  def create
    @expense = current_user.entered_expenses.create(expense_params)
    redirect_back fallback_location: expenses_path, flash: {success: "Added a new bill"}
  end

  private

  def expense_params
    params.require(:expense).permit(:amount, :currency, :description, :payer_id, :debtor_ids, :category, :split_evenly)
  end
end
