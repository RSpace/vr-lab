# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'vr-lab'
set :repo_url, 'git@github.com:RSpace/vr-lab.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/srv/www/immersionftw.com/vr-lab'
set :tmp_dir, "/home/www-data/tmp"

# Default value for :scm is :git
# set :scm, :copy
# set :exclude_dir, 'node_modules'

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('assets')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

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
