class ProfilesController < ApplicationController

  def create
    Rails.logger.info('Profile created!')

    inertia_location(profile_path(id: 1))
  end

  def show
    render inertia: 'Profiles', props: {
      name: 'A profile!'
    }
  end
end

