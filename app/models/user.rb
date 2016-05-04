# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  profile_pic     :string
#  password_digest :string           not null
#  session_token   :string           not null
#  bio             :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token, :ensure_default_bio

  has_many :photos
  has_many :comments

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_default_bio
    self.bio ||= "Hi! I'm new to Pyxels, take a look through my photos!"
  end
end
