puts "Clearing Database 💀💀💀"
User.destroy_all
# Link.destroy_all
Project.destroy_all
Award.destroy_all
Language.destroy_all
ProjectLanguage.destroy_all

puts "Seeding Database 🌱🍃🌱🍃🌱🍃"

puts "Creating Users 👤"
# Elliot
elliot = User.create(name: "Elliot Mangini", username: "elliotmangini", bio: "sample bio", img_url: "https://pbs.twimg.com/profile_images/1563896122292465665/No1oJcdm_400x400.jpg", email: "elliot.mangini@gmail.com", password: "1234")
# Ben
User.create(name: "Ben McShane", username: "benmcshane", bio: "sample bio", img_url: "test", email: "test", password: "1234")

puts "Creating Projects 🗒"
# Elliot
upquest = Project.create(user_id: User.first.id, title: "UpQuest!", description: "Track your fun", timeframe: "One Week - Oct. 2022", route: "UpQuest")
mountain = Project.create(user_id: User.first.id, title: "Mountain!", description: "A Better To Do List", timeframe: "One Week - Sept. 2022", route: "Mountain")
foley = Project.create(user_id: User.first.id, title: "Foley Generator 3000!", description: "Foley Assistant", timeframe: "One Week - Sept. 2022", route: "Foley")
wunseventy = Project.create(user_id: User.first.id, title: "174!", description: "drum machine", timeframe: "Two Weeks - Aug 2022", route: "174")
# Ben
Project.create(user_id: User.second.id, title: "DnD NPC Generator", description: "A random character generator meant to be used for high fantasy tabletop RPGs.", timeframe: "August 22nd, 2022 - August 25th, 2022", route: "npcgen")

Project.create(user_id: User.second.id, title: "Toad's Tempestuous Test", description: "An inexplicably Mario themed custom quiz generator.", timeframe: "September 12th, 2022 - September 15th, 2022", route: "toadtest")
Award.create(project_id: User.second.projects.find_by(title: "Toad's Tempestuous Test").id, name: "Tied for the Best Project award.")

Project.create(user_id: User.second.id, title: "MewMew Mill", description: "A Tamogachi / Stardew Valley inspired farming web game.", timeframe: "October 3rd, 2022 - October 6th, 2022", route: "mewmill")
Award.create(project_id: User.second.projects.find_by(title: "MewMew Mill").id, name: "Best CSS Award")

Project.create(user_id: User.second.id, title: "ProFOL.io", description: "An invite-only portfolio hosting platform.", timeframe: "October 24th, 2022 - October 27th, 2022", route: "profol")

puts "Creating Languages 👾"
js = Language.create(name: "JavaScript")
html = Language.create(name: "HTML")
css = Language.create(name: "CSS")
react = Language.create(name: "React")
ruby = Language.create(name: "Ruby")
rails = Language.create(name: "Rails")
sql = Language.create(name: "SQL")
sinatra = Language.create(name: "Sinatra")

puts "Linking Projects and Languages 🤝"
# Elliot
ProjectLanguage.create(project_id: upquest.id, language_id: css.id)
ProjectLanguage.create(project_id: upquest.id, language_id: ruby.id)
ProjectLanguage.create(project_id: upquest.id, language_id: react.id)
ProjectLanguage.create(project_id: upquest.id, language_id: sinatra.id)
ProjectLanguage.create(project_id: upquest.id, language_id: sql.id)

ProjectLanguage.create(project_id: mountain.id, language_id: react.id)
ProjectLanguage.create(project_id: mountain.id, language_id: css.id)
ProjectLanguage.create(project_id: mountain.id, language_id: html.id)

ProjectLanguage.create(project_id: foley.id, language_id: js.id)
ProjectLanguage.create(project_id: foley.id, language_id: css.id)
ProjectLanguage.create(project_id: foley.id, language_id: html.id)

ProjectLanguage.create(project_id: wunseventy.id, language_id: js.id)
ProjectLanguage.create(project_id: wunseventy.id, language_id: css.id)
ProjectLanguage.create(project_id: wunseventy.id, language_id: html.id)

# Ben
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "DnD NPC Generator").id, language_id: Language.find_by(name: "CSS").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "DnD NPC Generator").id, language_id: Language.find_by(name: "HTML").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "DnD NPC Generator").id, language_id: Language.find_by(name: "JavaScript").id)

ProjectLanguage.create(project_id: User.second.projects.find_by(title: "Toad's Tempestuous Test").id, language_id: Language.find_by(name: "CSS").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "Toad's Tempestuous Test").id, language_id: Language.find_by(name: "HTML").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "Toad's Tempestuous Test").id, language_id: Language.find_by(name: "JavaScript").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "Toad's Tempestuous Test").id, language_id: Language.find_by(name: "React").id)

ProjectLanguage.create(project_id: User.second.projects.find_by(title: "MewMew Mill").id, language_id: Language.find_by(name: "CSS").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "MewMew Mill").id, language_id: Language.find_by(name: "HTML").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "MewMew Mill").id, language_id: Language.find_by(name: "JavaScript").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "MewMew Mill").id, language_id: Language.find_by(name: "React").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "MewMew Mill").id, language_id: Language.find_by(name: "Ruby").id)


ProjectLanguage.create(project_id: User.second.projects.find_by(title: "ProFOL.io").id, language_id: Language.find_by(name: "CSS").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "ProFOL.io").id, language_id: Language.find_by(name: "HTML").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "ProFOL.io").id, language_id: Language.find_by(name: "JavaScript").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "ProFOL.io").id, language_id: Language.find_by(name: "React").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "ProFOL.io").id, language_id: Language.find_by(name: "Ruby").id)
ProjectLanguage.create(project_id: User.second.projects.find_by(title: "ProFOL.io").id, language_id: Language.find_by(name: "Rails").id)

puts "Database Seeded ✅✅✅✅✅✅"