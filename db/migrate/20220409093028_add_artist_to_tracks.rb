class AddArtistToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :artist, :string
  end
end
