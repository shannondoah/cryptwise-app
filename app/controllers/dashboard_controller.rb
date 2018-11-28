# frozen_string_literal: true

class DashboardController< ApplicationController
  before_action :authenticate_user!, :set_content

  def show
  end

  private

  def set_content
    params[:display] ||= "expenses"
    @content = params[:display]
  end
end
