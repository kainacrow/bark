class Dog < ApplicationRecord
  has_many_attached :images
  has_one :user, :foreign_key => :id

end
