from flask import Flask, render_template

app = Flask(__name__)

# Store the API token in a variable
API_TOKEN = '94ab0235ae6357c01cf2c1f75aaa360a'

@app.route('/')
def home():
    return render_template('index.html', api_token=API_TOKEN)

if __name__ == '__main__':
    app.run(debug=True)
