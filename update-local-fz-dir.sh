# Update locally managed CSS version of Frizzy
source .env;
FRIZZY_DIR="$(pwd)"
if [[ $UPDATE_TARGET_CSS_AUTOMATICALLY =~ "true" ]]; then
  echo "Finding locally managed CSS directory to copy or update into for your convenience...";
  if [ -d $TARGET_CSS_FRIZZY_DIR ] && [ -n $TARGET_CSS_FRIZZY_DIR ] && [ -n $VERSION ]; then
    echo "> Found folder. Proceeding with copying process:"
    cd $TARGET_CSS_FRIZZY_DIR/$VERSION/dist;
    if [ -d $TARGET_CSS_FRIZZY_DIR/$VERSION/dist ]; then
      rm -rf $TARGET_CSS_FRIZZY_DIR/$VERSION/dist;
      echo "> Deleted existing $TARGET_CSS_FRIZZY_DIR/$VERSION/dist folder. Continuing..."
    else
      echo "> Unable to find ${VERSION} folder within target repo. Continuing..."
    fi
    if [ -d $FRIZZY_DIR/dist ] && [ -d $TARGET_CSS_FRIZZY_DIR/$VERSION ]; then
      echo "> Frizzy dist folder found."
      cp -r $FRIZZY_DIR/dist $TARGET_CSS_FRIZZY_DIR/$VERSION;
      cd $TARGET_CSS_FRIZZY_DIR/$VERSION/dist;
      rm -rf frizzy.css;
      echo "...Newly built dist assets were updated onto your locally managed CSS directory."
    else
      echo "...Frizzy dist folder not found. Please check your source and target repos."
    fi
  else
    echo "Newly built dist assets were not updated onto your locally managed CSS directory as source and/or target folders were not specified. You might want to manually move them yourself if you have not already done so."
  fi
fi
