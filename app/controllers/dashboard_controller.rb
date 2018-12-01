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
    end
  end
end
