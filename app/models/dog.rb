class Dog < ApplicationRecord
  has_many_attached :images

  def images=(files = [])
    assets.create(image: f)
  end

end
