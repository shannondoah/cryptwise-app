# frozen_string_literal: true

class BalancesController< ApplicationController
  before_action :authenticate_user!
end
