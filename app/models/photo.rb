# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  photo_url   :string           not null
#  user_id     :integer          not null
#  album_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ActiveRecord::Base
  validates :title, :photo_url, :user_id, presence: true

  belongs_to :user
  has_many :comments
end
