# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

server 'immersionftw.com', user: 'www-data'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/srv/www/immersionftw.com/vr-lab'
set :tmp_dir, "/home/www-data/tmp"

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('assets')

# Default value for keep_releases is 5
set :keep_releases, 3

namespace :deploy do

  task :build_and_upload do
    run_locally do
      system("npm run build -- --production")
      system("scp -r #{Dir.pwd}/build www-data@immersionftw.com:#{fetch(:release_path)}")
      system("rsync -avz #{Dir.pwd}/src/assets/ www-data@immersionftw.com:#{shared_path}/assets")
    end
  end

  after :updated, :build_and_upload

end
