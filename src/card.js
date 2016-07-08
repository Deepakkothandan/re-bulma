/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';
import { getCallbacks } from './helper/helper';

export class Card extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isFullwidth: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    
    return [
      styles.card,
      this.props.isFullwidth ? styles.isFullwidth : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </div>
    );
  }
}

export class CardImage extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    
    return [
      styles.cardImage,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </div>
    );
  }
}

export class CardContent extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    
    return [
      styles.cardContent,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </div>
    );
  }
}

export class CardHeader extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    
    return [
      styles.cardHeader,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <header
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </header>
    );
  }
}

export class CardHeaderTitle extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    
    return [
      styles.cardHeaderTitle,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </p>
    );
  }
}

export class CardHeaderIcon extends Component {
  static propTypes = {
    style: PropTypes.object,
    icon: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    
    return [
      styles.cardHeaderIcon,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    
    return (
      <a
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        <i
          className={[
            styles.fa,
            this.props.icon,
          ].join(' ').trim()}
        />
      </a>
    );
  }
}

export class CardFooter extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    
    return [
      styles.cardFooter,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <footer
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </footer>
    );
  }
}

export class CardFooterItem extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.cardFooterItem,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </span>
    );
  }
}