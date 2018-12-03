# frozen_string_literal: true

class FriendshipsController< ApplicationController
  before_action :authenticate_user!

  def new
    @friendship = current_user.friendships_as_primary.build
  end

  def create
    current_user.friendships_as_primary.create(friendship_params)
    redirect_back fallback_location: dashboard_path, flash: {success: "Added a new friend"}
  end

  private

  def friendship_params
    params.require(:friendship).permit(:secondary_id)
  end
end
