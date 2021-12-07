#!/bin/sh
#
# Install the templates and userscripts in the appropriate Obsidian vault.
#
# Assumes the root Obsidian directory is $HOME/obsidian, and each
# vault is a child of this directory.

SETUP_DIR_NAME=""
if [[ $(uname -s) == "Darwin" ]]; then
  SETUP_DIR_NAME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
else
  SETUP_DIR_NAME="$(dirname $(readlink -f $0))"
fi

if [ -z "$1" ]; then
    echo "Please specify an Obsidian vault name."
    exit 0
fi

SCRIPTS_DIR=$HOME/obsidian/$1/templater/scripts
TEMPLATES_DIR=$HOME/obsidian/$1/templater/templates

mkdir -p $SCRIPTS_DIR
mkdir -p $TEMPLATES_DIR

cp $SETUP_DIR_NAME/scripts/* $SCRIPTS_DIR/
cp $SETUP_DIR_NAME/templates/* $TEMPLATES_DIR/
